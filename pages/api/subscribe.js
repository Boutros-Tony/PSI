import axios from 'axios';

export default async (req, res) => {
  const { email,name,company,industry,product,specs,country,phone,message } = req.body

  if (!email || !email.length) {
    return res.status(400).json({ error: 'Email is required' })
  }

  const API_KEY = process.env.MAILCHIMP_API_KEY
  const API_SERVER = process.env.MAILCHIMP_API_SERVER
  const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID
  
  const url = `https://${API_SERVER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`

  const data = {
    email_address: email,
    status: 'subscribed',
    merge_fields: {
        "NAME": name,
        "COMPANY":company,
        "INDUSTRY":industry,
        "PRODUCT":product,
        "SPECS": specs,
        "COUNTRY":country,
        "PHONE":phone,
        "MESSAGE": message
    }
  }

  const options = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `api_key ${API_KEY}`
    }
  }

  try {
    const response = await axios.post(url, data, options)
    if (response.status >= 400) {
      return res.status(400).json({
        error: `There was an error subscribing to the newsletter. Shoot me an email at ogbonnakell@gmail and I'll add you to the list.`
      })
    }
    return res.status(201).json({ message: 'success' })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ error: error.message })
  }
}