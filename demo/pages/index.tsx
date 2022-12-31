import { Button, Checkbox, Dropdown, Switch } from "@xplato/hydra"

const Section = ({ children }: any) => (
	<div className="wfull VStack mb-32">{children}</div>
)

const Row = ({ children }: any) => (
	<div className="wfull HStack gap-6">{children}</div>
)

const Block = ({ children }: any) => <div className="VStack">{children}</div>

const Title = ({ children }: any) => <h1 className="fs-4 mb-4">{children}</h1>

const Text = ({ children }: any) => <p className="m-0 mb-1">{children}</p>

const Caption = ({ children }: any) => (
	<p className="fs--1 opacity-06 m-0 mb-1">{children}</p>
)

const Home = () => {
	return (
		<section className="wfull mnh-screen pt-40">
			<div className="container">
				<h1 className="mb-16">Hydra</h1>

				<Section>
					<Title>Buttons</Title>

					<Row>
						<Block>
							<Caption>Default</Caption>
							<Button>Default Button</Button>
						</Block>
						<Block>
							<Caption>Colored</Caption>
							<Row>
								<Button bg="teal">Teal Button</Button>
								<Button bg="amber">Amber Button</Button>
							</Row>
						</Block>
						<Block>
							<Caption>Small</Caption>
							<Button size="sm">Small Button</Button>
						</Block>
						<Block>
							<Caption>Large</Caption>
							<Button size="lg">Large Button</Button>
						</Block>
					</Row>
				</Section>

				<Section>
					<Title>Checkbox</Title>

					<Row>
						<Block>
							<Caption>Default</Caption>
							<Checkbox
								label={checked =>
									checked ? "Checked" : "Not checked"
								}
							/>
						</Block>

						<Block>
							<Caption>On by default</Caption>
							<Checkbox
								label={checked =>
									checked ? "Checked" : "Not checked"
								}
								defaultChecked
							/>
						</Block>

						<Block>
							<Caption>Colored</Caption>
							<Checkbox
								label={checked =>
									checked
										? "Checked, and purple"
										: "Not checked"
								}
								bg="purple"
								defaultChecked
							/>
						</Block>
					</Row>
				</Section>

				<Section>
					<Title>Menu</Title>

					<Row>
						<Block>
							<Caption>Default</Caption>
							<Dropdown />
						</Block>
					</Row>
				</Section>

				<Section>
					<Title>Switch</Title>

					<Row>
						<Block>
							<Caption>Default</Caption>
							<Switch label={on => (on ? "On" : "Off")} />
						</Block>

						<Block>
							<Caption>On by default</Caption>
							<Switch
								label={on => (on ? "On" : "Off")}
								defaultOn
							/>
						</Block>

						<Block>
							<Caption>Colored</Caption>
							<Switch
								label={on => (on ? "On, and green" : "Off")}
								defaultOn
								bg="green"
							/>
						</Block>
					</Row>
				</Section>
			</div>
		</section>
	)
}

export default Home
