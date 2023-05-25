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

        marginBottom: '10%',
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
        backgroundColor: 'white',
    },
    Let_House_Input: {
        borderColor: 'gray',
        borderRadius: 5,
        borderWidth: 1,
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
        borderColor: 'gray',
        borderRadius: 5,
        borderWidth: 1,
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
    Rent_House_Input2: {
        borderColor: 'gray',
        borderRadius: 5,
        borderWidth: 1,
        color: 'black',
        marginTop: '5%',

        marginLeft: '5%',
        flex: 1,
        backgroundColor: "white",
        width: '100%',

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
        backgroundColor: '#F4F4F4',
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
        width: '90%',
        marginLeft: '5%',
        marginTop: '5%',
        marginBottom: '5%',
        backgroundColor: '#F4F4F4',
        height: 50,
    },
    Rent_House_Menu: {

        textAlign: 'center',
        alignItems: 'stretch',
        justifyContent: 'center',
        width: '90%',
        marginLeft: '5%',
        marginTop: '5%',
        marginBottom: '5%',
        backgroundColor: '#F4F4F4',
        height: 50,

    },
    Rent_House_Checkbox: {
        backgroundColor: 'firebrick',
        checkedColor: 'red',
        alignSelf: 'center',
    },
    Rent_House_View: {
        backgroundColor: 'white',
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
        marginBottom: '100%',
        backgroundColor: '#3978b7',
        height: '3%',
        borderRadius: 30,
    },

    let_house_touchable: {
        borderWidth: 1,
        borderColor: 'gray',
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
    //PAY_HOUSE
    header: {
        marginTop: 35,
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 10,
    },
    card: {
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        padding: 20,
        marginVertical: 10,
        marginHorizontal: 16,
    },
    image: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
        borderRadius: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
    },
    description: {
        fontSize: 14,
        marginTop: 5,
    },

    filter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#f5f5f5',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
        marginHorizontal: 10,
        marginBottom: 20,
    },
    searchInput: {
        flex: 1,
        marginRight: 10,
        paddingVertical: 5,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
        fontSize: 16,
    },
    Afad_House_Button: {
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        marginLeft: '5%',
        marginTop: '5%',
        marginBottom: '25%',
        backgroundColor: '#20c997',
        height: '20%',
        borderRadius: 30,
    },
    Afad_House_Text: {
        color: 'black',
        marginTop: '10%',
        marginLeft: '1%',
        flex: 1,
        backgroundColor: "white",
        width: '10%',
        minWidth: 60,
        minHeight: 50,
        maxHeight: 50,
        paddingLeft: 10,
    },
    Afad_House_Text2: {
        height: 40,
        width: '30%',
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
    },
    container: {
        flex: 1,
        padding: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 4,
        padding: 10,
        marginBottom: 20,
    },
    descriptionInput: {
        height: 100,
    },
    locationButton: {
        backgroundColor: '#007aff',
        padding: 10,
        borderRadius: 4,
        alignItems: 'center',
        marginBottom: 20,
    },
    locationButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    map: {
        height: 200,
        marginBottom: 20,
    },
    saveButton: {
        backgroundColor: '#007aff',
        padding: 10,
        borderRadius: 4,
        alignItems: 'center',
    },
    saveButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },











    ad: {
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        padding: 20,
        marginVertical: 10,
        marginHorizontal: 16,
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
    image_afad: {

        flex: 1,
        aspectRatio: 1.6,
        resizeMode: 'contain',
        width: Dimensions.get('window').width,
        width: '100%',
        height: '122%',

    },











    payHouse: {
        backgroundColor: 'white',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#EAEAEA',
        padding: '5%',
        marginBottom: '5%'
      },
      row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '5%'
      },
      priceContainer: {
        flexDirection: 'row',
        alignItems: 'center'
      },
      peopleContainer: {
        flexDirection: 'row',
        alignItems: 'center'
      },
      locationContainer: {
        color:'green',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '5%'
      },
      info: {
        textAlign:'left',
        fontSize: 20,
        marginLeft: '2%'
      },
      info2: {
        textAlign:'left',
        fontSize: 15,
        marginLeft: '2%'
      },
      price: {
        color: 'green',
        fontWeight: 'bold'
      },
      people: {
        textAlign: 'center'
      },
      location: {
        flex: 1,
        textAlign:'left',
        marginRight: '2%',
      },
      availability: {
        marginBottom: '5%'
      },
      button: {
        backgroundColor: 'green',
        borderRadius: 5,
        paddingVertical: '3%',
        paddingHorizontal: '5%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
      },
      button2: {
        backgroundColor: 'darkgreen',
        borderRadius: 5,
        paddingVertical: '3%',
        paddingHorizontal: '5%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
      },
      buttonText: {
        color: 'white',
        fontSize: 20
      }
    });