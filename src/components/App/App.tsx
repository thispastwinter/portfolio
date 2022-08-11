import { Helmet } from "react-helmet"
import { SUPABASE_URL } from "../../constants/Environment"
import { Providers } from "../Providers"

export function App() {
  return (
    <>
      <Helmet>
        <meta
          httpEquiv="Content-Security-Policy"
          content={`
            connect-src 'self' ${SUPABASE_URL} 
            default-src 'self'; 
            base-uri 'none'; 
            object-src 'none'; 
            style-src 'self' 'unsafe-inline'; 
          `}
        />
        <title>Justin Klaas</title>
      </Helmet>
      <Providers />
    </>
  )
}
