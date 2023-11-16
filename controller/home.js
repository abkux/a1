export const home = async (req, res) => {
	try {
		res.status(201).json({"Message": "Welcome this project is own by Abhishek (Abku)."})
	} catch (error) {
		res.status(500).json(("error_message": error.message))
	}
}