
import React, { Component } from 'react';
import Strapi from 'strapi-sdk-javascript/build/main';
import { setCart, getCart } from './components/utils';


const Context = React.createContext();

const apiUrl = process.env.API_URL || 'http://localhost:1337';
const strapi = new Strapi(apiUrl);


const addToCart = (state, coral) => {
  const { cartItems } = state;

  const alreadyInCart = cartItems.findIndex(item => item._id === coral._id);


  // index of item will return -1 if item is not in cart
  if (alreadyInCart === -1) {
    const updatedItems = cartItems.concat({
      ...coral,
      quantity: 1,
    });
    setCart(updatedItems);
    return updatedItems;
  }
  const updatedItems = [...cartItems];
  updatedItems[alreadyInCart].quantity += 1;

  setCart(updatedItems)
  return updatedItems;
};


// Delete item from cart
const deleteItem = (state, id) => {
  const { cartItems } = state;

  const filteredItems = cartItems.filter(item => item._id !== id);
  setCart(filteredItems);
  return filteredItems;


};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        cartItems: addToCart(state, action.payload),
      };

    case 'DELETE_ITEM':
      return { cartItems: deleteItem(state, action.payload) };


    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    coralTypes: [],
    sps: [],
    lps: [],
    soft: [],
    wysiwygs: [],
    cartItems: [],
    loadingCoralTypes: true,
    loadingSPS: true,
    loadingSOFT: true,
    loadingLPS: true,
    loadingWysiwyg: true,
    dispatch: (action) => {
      this.setState(state => reducer(state, action));
    },
  };

  async componentDidMount() {
    try {
      const { data } = await strapi.request('POST', '/graphql', {
        data: {
          query: `query {
            coraltypes {
              _id
              name
              description
              image {
                url
              }
              
            }
          }`,
        },
      });
      this.setState({
        coralTypes: data.coraltypes,
        loadingCoralTypes: false,
        cartItems: getCart()
      });
    } catch (error) {
      console.log(error);
    }

    try {
      const { data } = await strapi.request('POST', '/graphql', {
        data: {
          query: `query {
            wysiwygs {
              _id
              name
              price
              description
              quantity
              image {
                url
              }
              secondary_images {
                url
              }
              
            }
          }`,
        },
      });
      this.setState({ wysiwygs: data.wysiwygs, loadingWysiwyg: false });
    } catch (error) {
      console.log(error);
    }

    try {
      const { data } = await strapi.request('POST', '/graphql', {
        data: {
          query: `query {
            sps {
              _id
              name
              price
              description
              quantity
              display_image {
                url
              }
              secondary_images {
                url
              }
            }
          }`,
        },
      });
      this.setState({ sps: data.sps, loadingSPS: false });
    } catch (error) {
      console.log(error);
    }

    try {
      const { data } = await strapi.request('POST', '/graphql', {
        data: {
          query: `query {
            softs {
              _id
              name
              price
              description
              quantity
              display_image {
                url
              }
              secondary_images {
                url
              }
              
            }
          }`,
        },
      });
      this.setState({ soft: data.softs, loadingSOFT: false });
    } catch (error) {
      console.log(error);
    }

    try {
      const { data } = await strapi.request('POST', '/graphql', {
        data: {
          query: `query {
            lps {
              _id
              name
              price
              description
              quantity
              display_image {
                url
              }
              secondary_images {
                url
              }
              
            }
          }`,
        },
      });
      this.setState({ lps: data.lps, loadingLPS: false });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <Context.Provider value={{ state: this.state }}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
