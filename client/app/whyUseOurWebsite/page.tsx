import "./why.css"
import Link from "next/link"

export default function page() {
  return (
    <>
      <div className="whyPage">
        <div className="pageContainer">
          <div className="whyDetails">
            <h1 className="whyHeading">Why use Our Website?</h1>
            <h4>here's why</h4>
            <li>
              <ul>
                - its fun i guess.
              </ul>
              <ul>
                - it will make me happy :).
              </ul>
              <ul>
                - your chat is completely safe and gets deleted after every session.(actually i didnt put efforts to set up an database to store messages)
              </ul>
            </li>
          </div>
          <img className="whyImg" src="/guts.png" />
          <div className="whyLink">
            <Link href="/" className="link">return to chat page</Link>
          </div>
        </div>
      </div>
    </>
  )
}
