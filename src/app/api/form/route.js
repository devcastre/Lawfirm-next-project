

export async function POST(req) {
    
    try {
        const body = await req.json();

        const response = await fetch('https://script.google.com/macros/s/AKfycbwb2xgHpqzp78NKnlkd3wUrnG45W73_CP8VDOqiKaZ7t1E0WB6P-uGuWLYQaf7ylrmTgw/exec', 
        {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(body),
        }
        )
        const data = await response.json();

        return Response.json({success: true, data});
    
    }catch (error) {
        
        return Response.json(
        { success: false, error: error.message },
        { status: 500 }
        );
  }
    
}