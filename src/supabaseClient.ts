import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://pszkcntmkvtylvwnuflg.supabase.co';
const supabaseAnonKey = 'sb_publishable_4N4Qits1AQS1Nmjeov0AWA_R1rQRL2b';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
