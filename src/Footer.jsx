import { ColorModeButton } from "./components/ui/color-mode";
import './Footer.css';

function Footer() {
    return(
            <footer>
                <div>
                    <p>
                        Kgomotso Mkhawane • © {new Date().getFullYear()}
                    </p>
                </div>
                <div>
                    <ColorModeButton />
                </div>
            </footer>
    )
}

export default Footer