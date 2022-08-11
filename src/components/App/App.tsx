import { Helmet } from "react-helmet"
import { SUPABASE_URL } from "../../constants/Environment"
import { Providers } from "../Providers"

export function App() {
  return (
    <>
      <Helmet defaultTitle="Justin Klaas">
        <meta
          httpEquiv="Content-Security-Policy"
          content={`
            connect-src 'self' ${SUPABASE_URL}; 
            img-src 'self' ${SUPABASE_URL};
            object-src 'none'; 
            style-src 'self' 'unsafe-inline'; 
            script-src 'self';
          `}
        />
      </Helmet>
      <Providers />
    </>
  )
}
