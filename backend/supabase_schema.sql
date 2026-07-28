-- Jalankan file ini SEKALI di Supabase SQL Editor (Project > SQL Editor > New query)
-- sebelum sesi kelas manapun dimulai.
--
-- Semua tabel dibuat di skema "ekskul_coding_asy_syahid" (bukan "public"),
-- supaya proyek ini terpisah rapi dari skema default Supabase.

create schema if not exists ekskul_coding_asy_syahid;

-- PENTING: skema custom TIDAK otomatis terlihat oleh PostgREST/klien JS.
-- Setelah menjalankan file ini, buka Project Settings -> API -> "Exposed schemas"
-- di dashboard Supabase, lalu tambahkan "ekskul_coding_asy_syahid" ke daftar itu.
-- Tanpa langkah ini, backend akan gagal query dengan error skema tidak ditemukan.

create table ekskul_coding_asy_syahid.readings (
  id          bigint generated always as identity primary key,
  device_id   text not null,        -- ID unik per kelompok, mis. 'sma-1', 'smp-3'
  payload     jsonb not null,       -- { temp, humidity, fanOn }
  created_at  timestamptz not null default now()
);

create index readings_device_created_idx on ekskul_coding_asy_syahid.readings (device_id, created_at desc);

-- Satu baris PER DEVICE, dibuat otomatis (upsert) oleh server saat device itu
-- POST data pertama kalinya -- tidak perlu insert manual per device di sini.
create table ekskul_coding_asy_syahid.fan_control (
  device_id     text primary key,
  fan_mode      text not null default 'auto',      -- 'manual' | 'auto'
  manual_fan_on boolean not null default false,
  threshold     integer not null default 30,        -- 20-40
  esp32_ip      text,                                -- diisi otomatis dari POST /api/readings
  updated_at    timestamptz not null default now()
);

-- RLS dimatikan: cek API key dilakukan di server Express, bukan lewat auth Supabase.
-- Ini simplifikasi untuk demo kelas LAN, BUKAN pola production.
alter table ekskul_coding_asy_syahid.readings disable row level security;
alter table ekskul_coding_asy_syahid.fan_control disable row level security;

-- WAJIB untuk skema custom: role Postgres yang dipakai SUPABASE_KEY tidak otomatis
-- punya izin apa pun di skema selain "public". GRANT ini mencakup anon,
-- authenticated, DAN service_role -- isi ketiganya supaya backend tetap jalan
-- terlepas dari jenis key mana yang Anda pakai di .env (anon public key ATAU
-- service_role secret key). Tanpa GRANT ini, backend gagal dengan error
-- "permission denied for schema ..." meski skema sudah di "Exposed schemas".
grant usage on schema ekskul_coding_asy_syahid to anon, authenticated, service_role;
grant all on all tables in schema ekskul_coding_asy_syahid to anon, authenticated, service_role;
grant all on all sequences in schema ekskul_coding_asy_syahid to anon, authenticated, service_role;

-- Supaya tabel yang dibuat NANTI di skema ini (kalau ada) juga otomatis ter-grant,
-- tanpa perlu jalankan GRANT manual lagi tiap kali menambah tabel baru.
alter default privileges in schema ekskul_coding_asy_syahid
  grant all on tables to anon, authenticated, service_role;
alter default privileges in schema ekskul_coding_asy_syahid
  grant all on sequences to anon, authenticated, service_role;
