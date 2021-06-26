import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Home from '../pages/Home'
import Simpsons from '../pages/Simpsons'
import RickandMorty from '../pages/RickandMorty'

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/simpsons' component={Simpsons} />
                <Route path='/rickandMorty' component={RickandMorty} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes