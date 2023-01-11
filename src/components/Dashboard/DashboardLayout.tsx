import Header from './Header'
import Navbar from './Navbar'

function DashboardLayout({children, padding}) {
  return (
    <>
      <Header />
      <main className="mainContainer">
        <Navbar />
        <section className="content" style={{paddingBottom: padding}}>
          {children}
        </section>
      </main>
    </>
  )
}

export default DashboardLayout