export default class BookstoreService {
	data = [
		{
			id: 1,
			title: "Pride and Prejudice (Oxford World’s Classics)",
			author: "Some Author",
			price: 10,
			coverImage: 'https://images.pexels.com/photos/167698/pexels-photo-167698.jpeg?auto=compress&cs=tinysrgb&h=150&w=200'
		},
		{
			id: 2,
			title: "The Lord of the Rings",
			author: "Some Author 2",
			price: 134,
			coverImage: 'https://images.pexels.com/photos/635017/pexels-photo-635017.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=150&w=250'
		},
	];

	getBooks() {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				if (Math.random() > .75) {
					reject(new Error('Error in bookstore service'));
				} else {
					resolve(this.data);
				}
			}, 700);
		});
	}
};
