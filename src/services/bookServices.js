import axios from 'axios';

const getFromServer = async () => {
	const config = {
		method: 'GET'
	}
	try {
		const response = await fetch(
			`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/UT7NQsHrRxIY6vwPxxrv/books`,
			config,
		)
    const datas = await response.json()
		return datas
	} catch (err) {
		return err
	}
}

const sendToServer = async(book) => {
	const config = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(book),
	}

	try {
		const response = await fetch(
			`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/UT7NQsHrRxIY6vwPxxrv/books`,
			config,
    )
    const datas = await response.text()
		return datas
  } catch (err) {
		return err
	}
}


const removeFromServer = async (id) => {
  try {
    const res = await axios.delete(
      `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/UT7NQsHrRxIY6vwPxxrv/books/${id}`,
    );
    const { data } = res;
    return data;
  } catch (error) {
    return error;
  }
};

const bookServices = {
  getFromServer,
  sendToServer,
  removeFromServer,
};

export default bookServices;
