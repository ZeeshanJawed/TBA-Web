import "lazysizes"
import "lazysizes/plugins/parent-fit/ls.parent-fit"
import Header from "./header"
import Footer from "./footer"

export default function Layout({ settings, children }: any) {
  return (
    <>
      <Header settings={settings} />
      <main className="min-h-screen max-w-screen-lg mx-auto px-5">{children}</main>
      <Footer settings={settings} />
    </>
  )
}
