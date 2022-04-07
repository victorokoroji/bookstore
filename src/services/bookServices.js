import axios from 'axios'

const getFromServer = async () => {
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

const sendToServer = async datas => {
	try {
		const res = await axios.get(
			'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/UT7NQsHrRxIY6vwPxxrv/books/',
			{ datas },
		)
		const data = res.data
		console.log(data)
		return data
	} catch (error) {
		return error
	}
}

const removeFromServer = async id => {
	try {
		const res = await axios.delete(
			`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/UT7NQsHrRxIY6vwPxxrv/books/${id}`,
		)
		const data = res.data
		console.log(data)
		return data
	} catch (error) {
		return error
	}
}

const bookServices = {
	getFromServer,
  sendToServer,
  removeFromServer
}

export default bookServices
