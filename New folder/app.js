const API_KEY="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"

async function fetchData (){
    await fetch("https://api.openai.com/v1/chat/completions",{
        method: "POST",
        headers: {
            Authorization: `Bearer ${API_KEY}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            model:"gpt-4",
            messages:[
                {
                    role:"user",
                    content:"Hello "
                },
            ]
        })
    })
    const data = await response.json()
    console.log(data)
}
fetchData()