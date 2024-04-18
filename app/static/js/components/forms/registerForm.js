import {html} from "../../packages/arrow.js"

const loginForm = html`
    <form id="registerForm">
        <div class="formGroup">
            <label for="Username">Username</label>
            <input type="text" name="Username" id="inputUsername" required/>
        </div>
        <div class="formGroup">
            <label for="Email">Email</label>
            <input type="email" name="Email" id="inputEmail" required>
        </div>
        <div class="formGroup">
            <label for="Pasword">Password</label>
            <input type="password" name="Password" id="inputPassword" required>
        </div>
        <div class="formGroup">
            <label for="VerifyPasword">Verify Password</label>
            <input type="password" name="VerifyPassword" id="inputVarifyPassword" required>
        </div>
        <div class="formGroup">
            <button type="submit">Send</button>
            <button type="reset">Clear</button>
        </div>
    </form>
`

export default loginForm;