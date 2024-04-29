import { asyncHandler } from "../utils/asuncHandler.js";

const registerUser = asyncHandler( async (req, res) => {
    res.status(200).json({
        message: "Dhruv dhuria"
    })
} )

export {registerUser}
