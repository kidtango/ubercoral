
import React, { Component } from 'react';
import Strapi from 'strapi-sdk-javascript/build/main';

const Context = React.createContext();

const apiUrl = process.env.API_URL || 'http://localhost:1337';
const strapi = new Strapi(apiUrl);

const reducer = (state, action) => {
  switch (action.type) {
    case 'SPS':
      return {
        ...state,
        sps: state.sps,
      };

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
    loadingCoralTypes: true,
    loadingSPS: true,
    loadingSoft: true,
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
      this.setState({ coralTypes: data.coraltypes, loadingCoralTypes: false });
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
              display_image {
                url
              }
              
            }
          }`,
        },
      });
      this.setState({ soft: data.softs, loadingSoft: false });
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
              image {
                url
              }
              
            }
          }`,
        },
      });
      this.setState({ lps: data.lps });
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
              image {
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
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
