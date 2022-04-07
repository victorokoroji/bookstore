import axios from 'axios'

const getBooks = async () => {
	try {
		const res = await axios.get(
			'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/UT7NQsHrRxIY6vwPxxrv/books/',
		)
    const data = res.data
    console.log(data)
    return data
  } catch (error) {
    return error
  }
}

const bookServices = {
  getBooks
}

export default bookServices