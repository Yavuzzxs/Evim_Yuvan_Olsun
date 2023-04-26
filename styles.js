import { StyleSheet, Dimensions } from "react-native";
export const styles = StyleSheet.create({
    Main_View: {
        backgroundColor: 'firebrick',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Main_Buttons: {
        backgroundColor: 'maroon',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: '5%',
        marginBottom: '5%',
        width: '70%',
        borderRadius: 30
    },
    Main_Texts: {
        color: 'white',
        marginTop: '10%',
        marginBottom: '10%',
        marginLeft: '5%',
        marginRight: '5%',
    },
    Let_House_View: {
        flex: 1,
        backgroundColor: 'firebrick',
    },
    Let_House_Input: {
        color: 'black',
        marginTop: '5%',
        marginLeft: '5%',
        flex: 1,
        backgroundColor: "white",
        width: '90%',

        minHeight: 50,
        maxHeight: 50,
        paddingLeft: 10,
    },
    Rent_House_Input: {
        color: 'black',
        marginTop: '5%',
        marginLeft: '1%',
        flex: 1,
        backgroundColor: "white",
        width: '90%',
        minWidth: 320,
        minHeight: 50,
        maxHeight: 50,
        paddingLeft: 10,
    },
    Let_House_Button: {
        textAlign: 'center',
        alignItems: 'stretch',
        justifyContent: 'center',
        width: '90%',
        marginLeft: '5%',
        marginTop: '5%',
        marginBottom: '5%',
        backgroundColor: 'white',
        height: 50,
    },
    Let_House_Date: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    Rent_House_Menu_Inside: {
        alignContent: 'center',
        justifyContent: 'center',
        marginLeft: '20%',
        width: '73%',
        marginTop: 15,
        backgroundColor: 'white',
        borderRadius: 30
    },
    Rent_House_Button: {
        textAlign: 'center',
        alignItems: 'stretch',
        justifyContent: 'center',
        width: 340,
        marginLeft: '5%',
        marginTop: '5%',
        marginBottom: '5%',
        backgroundColor: 'white',
        height: 50,
    },
    Rent_House_Menu: {
        textAlign: 'center',
        alignItems: 'stretch',
        justifyContent: 'center',
        width: 250,
        marginTop: 30,
        marginBottom: 20,
        backgroundColor: 'white',
        height: 50,
        borderRadius: 30,
    },
    Rent_House_Checkbox: {
        backgroundColor:'firebrick',
        checkedColor:'red',
        alignSelf: 'center',
    },
    Rent_House_View: {
        backgroundColor: 'firebrick',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    Rent_House_View2: {
        backgroundColor: 'firebrick',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    BookingScreenView2: {
        flexDirection: 'row',
        //backgroundColor: 'green',
        marginTop: '5%',

    },
    BookingScreenButtonTime: {
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: '15%',
        width: '30%',
        marginTop: 40,
        marginBottom: 40,
        backgroundColor: 'white',
        height: 50,
        borderRadius: 30,
    },
    Let_House_Send: {
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        width: '30%',
        marginLeft: '35%',
        marginTop: '5%',
        marginBottom: '25%',
        backgroundColor: 'white',
        height: '3%',
        borderRadius: 30,
    },

    let_house_touchable: {
        textAlign: 'center',
        alignItems: 'stretch',
        justifyContent: 'center',
        marginLeft: '20%',
        marginTop: '5%',
        width: '90%',
        marginLeft: '5%',
        backgroundColor: 'white',
        minHeight: 50,
        maxHeight: 50,
    },
    BookingButtonInside: {
        alignContent: 'center',
        justifyContent: 'center',
        marginLeft: '20%',
        width: '73%',
        marginTop: 15,
        backgroundColor: 'white',
        borderRadius: 30
    },
    Let_House_Menu_Inside: {
        alignContent: 'center',
        justifyContent: 'center',
        marginLeft: '20%',
        width: '73%',
        marginTop: 15,
        backgroundColor: 'white',
        borderRadius: 30
    },

    menuStyle: {
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 10,
    },







    imageContainer: {
        backgroundColor: 'firebrick',
        alignItems: 'center',
    },
    image: {
        marginTop: '5%',
        flex: 1,
        aspectRatio: 1.3,
        resizeMode: 'contain',
        width: Dimensions.get('window').width,
        width: '90%',
        height: '10%',

    },

});