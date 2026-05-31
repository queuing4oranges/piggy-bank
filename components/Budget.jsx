import { supabase } from '@/lib/supaBaseClient';

export default async function Budget() {
    const { data, error } = await supabase
      .from('transactions')
      .select('amount')
      .order('timestamp', { ascending: false })

    if (error) {
      console.error(error);
      return;
    }
    
    const sum = (data || []).reduce((acc, item) => acc + item.amount, 0) || 0;
    
    return <p>{sum.toFixed(2)} €</p>
}
