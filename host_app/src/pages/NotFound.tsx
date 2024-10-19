import { Link } from "react-router-dom";

const NotFound = () => {
	return (
		<div className="h-full flex items-center justify-center">
			<div className="text-center">
				<h1 className="text-2xl font-bold">404 - Page Not Found</h1>
				<p>Sorry, the page you are looking for does not exist.</p>

				<Link
					to="/"
					className="mt-4 px-4 py-2 text-blue-600 hover:text-blue-700 rounded-lg"
				>Go back to Home</Link>
			</div>
		</div>
	);
};

export default NotFound;
