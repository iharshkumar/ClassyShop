import CartProductModel from "../models/cartProduct.model.js";
import MyListModel from "../models/myList.model.js";

export const addToMyListController = async (request, response) => {
    try {
        const userId = request.userId
        const { productId, productTitle, image, rating, price, oldPrice, discount, brand } = request.body

        const item = await MyListModel.findOne({
            userId: userId,
            productId: productId
        })

        if (item) {
            return response.status(400).json({
                message: "Item already in myList"
            })
        }

        const myList = new MyListModel({
            productId,
            productTitle,
            image, rating,
            price,
            oldPrice,
            discount,
            brand,
            userId
        })

        const save = await myList.save()

        return response.status(200).json({
            error: false,
            success: true,
            message: "The product added in the myList"
        })

    } catch (error) {
        return response.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
}


export const deleteToMyListController = async (request, response) => {
    try {
        const myListItem = await MyListModel.findById(request.params.id);

        if (!myListItem) {
            return response.status(404).json({
                error: true,
                success: false,
                message: "Item with this given id was not found"
            })
        }

        const deletedItem = await MyListModel.findByIdAndDelete(request.params.id)

        if (!deletedItem) {
            return response.status(404).json({
                error: true,
                success: false,
                message: "Item is not deleted"
            })
        }

        return response.status(200).json({
            error: false,
            success: true,
            message: "The item removed from myList"
        })


    } catch (error) {
        return response.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
}

export const getMyListController = async (request, response) => {
    try {
        const userId = request.userId;
        const myListItem = await MyListModel.find({
            userId: userId
        })


        return response.status(200).json({
            error:false,
            success:true,
            data:myListItem
        })
    } catch (error) {
        return response.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
}