import React, { Component } from 'react';
import { BrowserRouter} from 'react-router-dom';
import Product from './Product';
import Title from './Title';
import {storeProducts} from '../data';
import { ProductConsumer } from '../context'

export default class ProductList extends Component {

    state = {
        Product: storeProducts
    }

    render() {
        return (
            <BrowserRouter>
                <div className="py-5">
                    <div className="container">
                        <Title name="our" title="o"/>
                        <div className="row">
                            <ProductConsumer>
                                {value => {
                                    return value.products.map(product => {
                                        return <Product key={product.id} product={product} />
                                    })
                                }}
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
      
            </BrowserRouter>
        )
    }
}
