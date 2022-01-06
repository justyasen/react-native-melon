import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    title: {
        fontSize: 22,
        marginTop: 10,
        fontWeight: 'bold',
    },

    image: {
        flex: 2,
        height: 350,
        resizeMode: 'contain' //so it can resize depending on device size
    }, 

    root: {
        flexDirection: "row", 
        margin: 5,
        borderWidth: 1, 
        borderColor: '#8C92AC',
        borderRadius: 5,
        backgroundColor: '#fff'
    },

    textContainer: {
        margin: 3,
        backgroundColor: '#fff',
        flex: 1.8, 
    }, 

    textDescription: {
        margin: 0,
        backgroundColor: '#fff',
        fontSize: 16, 
    },

    price: {
        color: 'green',
        fontSize: 18,
        fontWeight: 'bold',
    },

    rating: {
        flexDirection: "row", 
        alignItems: 'center', 
    },

    star: {
        marginTop: 2, 
        marginLeft: 2,
    },

    oldPrice: {
        color: 'red',
        fontSize: 12, 
        fontWeight: 'normal',
        textDecorationLine: 'line-through',
    },

    page: {
        padding: 10, 
    }


})