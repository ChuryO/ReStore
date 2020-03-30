export default class BookstoreService {
	getBooks() {
		return [
			{
				id: 1,
				title: "Pride and Prejudice (Oxford World’s Classics)",
				author: "Some Author",
				price: 10,
				coverImage: "https://source.unsplash.com/120x180/?book"
			},
			{
				id: 2,
				title: "The Lord of the Rings",
				author: "Some Author 2",
				price: 134,
				coverImage: "https://source.unsplash.com/120x180/?books"
			},
		];
	}
};
