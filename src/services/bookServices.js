import axios from 'axios';

const getFromServer = async () => {
  try {
    const res = await axios.get(
      'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/UT7NQsHrRxIY6vwPxxrv/books/',
    );
    const datas = res.data;
    return datas;
  } catch (error) {
    return error;
  }
};

const sendToServer = async(book) => {
  console.log(book);
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
    console.log(response);
    const datas = await response.text()
		return datas
  } catch (err) {
    console.log(err);
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
