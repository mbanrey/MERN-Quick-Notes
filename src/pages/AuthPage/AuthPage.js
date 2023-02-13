import SignUpForm from "../components/SignUpForm/SignUpForm";

export default function AuthPage({ setUser }) {
	return (
		<>
			<h2>AuthPage</h2>
            <SignUpForm setUser={setUser} />
		</>
	)
}
