import { Routes, Route} from 'react-router-dom';

import { New } from '../pages/New';
import { Home } from '../pages/Home';
import { Edit } from '../pages/Edit';
import { Details } from '../pages/Details';

export function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/Edit" element={<Edit />} />
            <Route path="/details/:id" element={<Details />} />
        </Routes>
    )
}