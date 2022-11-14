import Client from './api'

export const GetVinyls = async () => {
  try {
    const res = await Client.get('/feed')
    return res.data
  } catch (error) {
    throw error
  }
}
