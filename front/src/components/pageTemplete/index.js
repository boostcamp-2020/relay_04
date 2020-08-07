import React from "react";
import Header from '../Header'

function PageTemplate({ children }) {
    return (
        <div>
            <Header />
            <main>
                {children}
            </main>
        </div>
    )
}

export default PageTemplate;