import AddressModel from "../models/address.model.js";
import UserModel from '../models/user.model.js'

export const addAddressController = async (request, response) => {
    try {
        const {
            fullName,
            address_line1,
            city,
            state,
            pincode,
            country,
            mobile,
            landmark,
            addressType
        } = request.body

        const userId = request.userId

        if (!address_line1 || !city || !state || !country || !pincode || !mobile || !landmark || !addressType) {
            return response.status(500).json({
                message: "Please provide all the fields",
                error: true,
                success: false
            })
        }

        const address = new AddressModel({
            fullName,
            address_line1,
            city,
            state,
            pincode,
            country,
            mobile,
            userId,
            landmark,
            addressType
        })

        const savedAddress = await address.save()


        const updateAddressUser = await UserModel.updateOne({ _id: userId }, {
            $push: {
                address_details: savedAddress?._id
            }
        })

        return response.status(200).json({
            data: savedAddress,
            message: "Address add successfully",
            error: false,
            success: true
        })

    } catch (error) {
        return response.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
}

export const getAddressController = async (request, response) => {
    try {
        const address = await AddressModel.find({ userId: request?.query?.userId })
        if (!address) {
            return response.status({
                error: true,
                success: false,
                message: "Address not found"
            })
        }

        else {

            const updatedUser = await UserModel.updateOne({ _id: request?.query?.userId }, {
                $push: {
                    address_details: address?._id
                }
            })

            return response.status(200).json({
                error: false,
                success: true,
                address: address
            })
        }

    } catch (error) {
        return response.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
}

export const deleteAddressController = async (request, response) => {
    try {
        const userId = request.userId
        const _id = request.params.id

        if (!_id) {
            return response.status(400).json({
                message: "Provide _id",
                error: true,
                success: false
            })
        }

        const deleteAddress = await AddressModel.deleteOne(
            {
                _id: _id,
                userId: userId
            }
        )

        if (!deleteAddress) {
            return response.status(404).json({
                message: "The address in the database is not found",
                error: true,
                success: false
            })
        }



        return response.json({
            message: "Address remove",
            error: false,
            success: false,
            data: deleteAddress
        })


    } catch (error) {
        return response.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
}

export const getSingleAddressController = async (request, response) => {
    try {
        const id = request.params.id
        const address = await AddressModel.findOne({ _id: id })
        if (!address) {
            return response.status(404).json({
                error: true,
                success: false,
                message: "Address not found"
            })
        }

        else {
            return response.status(200).json({
                error: false,
                success: true,
                address: address
            })
        }

    } catch (error) {
        return response.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
}

export const updateAddressController = async (request, response) => {
    try {
        const userId = request.userId
        const { _id, fullName, address_line1, city, state, pincode, country, mobile, landmark, addressType } = request.body

        if (!_id) {
            return response.status(400).json({
                message: "Provide _id",
                error: true,
                success: false
            })
        }

        const updateAddress = await AddressModel.updateOne({ _id: _id, userId: userId }, {
            fullName,
            address_line1,
            city,
            state,
            pincode,
            country,
            mobile,
            landmark,
            addressType
        })

        return response.json({
            message: "Address updated successfully",
            error: false,
            success: true,
            data: updateAddress
        })

    } catch (error) {
        return response.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
}