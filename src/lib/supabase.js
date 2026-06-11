import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
    import.meta.env.VITE_SUPABASE_URL ||
    "https://gxfeazabyeewzdfzxilz.supabase.co";

const supabaseAnonKey =
    import.meta.env.VITE_SUPABASE_ANON_KEY ||
    "sb_publishable_shNoodRG9qTwdoHIY-KllQ_OjTMROoD";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);