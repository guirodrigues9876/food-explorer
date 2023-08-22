import { Routes, Route} from 'react-router-dom';
import { useAuth } from '../hooks/auth';

import { Home } from '../pages/Home';
import { Details } from '../pages/Details';
import { New } from '../pages/New';
import { Edit } from '../pages/Edit';

export function AppRoutes(){
    // const { user } = useAuth();
    // const isAdmin = user && user.isAdmin === 1;

    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details/:id" element={<Details />} />
            {/* {isAdmin && <Route path="/new" element={<New />} />} */}
            {/* {isAdmin && <Route path="/edit/:id" element={<Edit />} />} */}
        </Routes>
    )
}