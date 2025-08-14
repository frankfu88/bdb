import { sql } from '@vercel/postgres';

export async function ensureSchema() {
  await sql`
    CREATE TABLE IF NOT EXISTS contact_submissions (
      id           BIGSERIAL PRIMARY KEY,
      created_at   TIMESTAMPTZ NOT NULL DEFAULT now(),
      name         TEXT NOT NULL,
      phone        TEXT NOT NULL,
      email        TEXT NOT NULL,
      message      TEXT NOT NULL,
      website      TEXT,
      ip           INET,
      user_agent   TEXT,
      referer      TEXT
    );
    CREATE INDEX IF NOT EXISTS idx_contact_created_at
      ON contact_submissions (created_at DESC);
  `;
}

export async function insertContact(row: {
  name: string;
  phone: string;
  email: string;
  message: string;
  website?: string | null;
  ip?: string | null;
  user_agent?: string | null;
  referer?: string | null;
}) {
  const r = await sql/*sql*/`
    INSERT INTO contact_submissions
      (name, phone, email, message, website, ip, user_agent, referer)
    VALUES
      (${row.name}, ${row.phone}, ${row.email}, ${row.message},
       ${row.website ?? null}, ${row.ip ?? null},
       ${row.user_agent ?? null}, ${row.referer ?? null})
    RETURNING id, created_at;
  `;
  return r.rows[0] as { id: string; created_at: string };
}
