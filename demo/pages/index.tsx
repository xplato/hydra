import { Button } from "@xplato/hydra"

const Section = ({ children }: any) => (
	<div className="wfull VStack">{children}</div>
)

const Row = ({ children }: any) => (
	<div className="wfull HStack gap-6">{children}</div>
)

const Block = ({ children }: any) => <div className="VStack">{children}</div>

const Title = ({ children }: any) => <h1 className="fs-4 mb-4">{children}</h1>

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
			</div>
		</section>
	)
}

export default Home
