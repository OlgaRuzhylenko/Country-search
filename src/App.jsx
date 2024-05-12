import { Header } from 'components';
import { Country } from 'pages/Country/Country';
import { Home } from 'pages/Home/Home';
import { SearchCountry } from 'pages/SearchCountry/SearchCountry';
import { Navigate, Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="/country" element={<SearchCountry />} />
        <Route path="/country/:countryId" element={<Country />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
