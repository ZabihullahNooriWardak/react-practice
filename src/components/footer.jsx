function Footer(){
    const now = new Date();
    const Year = now.getFullYear();
    return <footer>
        <p>copyright &copy; {Year}</p>
    </footer>
}
export {Footer};