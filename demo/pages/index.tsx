import {
	BoltIcon,
	CogIcon,
	MapPinIcon,
	MoonIcon,
	PhoneArrowDownLeftIcon,
	SunIcon,
} from "@heroicons/react/20/solid"
import { useTheme } from "next-themes"

import {
	Button,
	Checkbox,
	Dropdown,
	SegmentedControl,
	Switch,
} from "@xplato/hydra"

const Section = ({ children }: any) => (
	<div className="wfull VStack mb-32">{children}</div>
)

const Row = ({ children }: any) => (
	<div className="wfull HStack gap-6">{children}</div>
)

const Block = ({ children }: any) => <div className="VStack">{children}</div>

const Title = ({ children }: any) => <h1 className="fs-8 mb-4">{children}</h1>

const Text = ({ children }: any) => (
	<p className="m-0 mb-8 opacity-08 lh-1-5">{children}</p>
)

const Caption = ({ children }: any) => (
	<p className="fs--1 opacity-06 m-0 mb-1">{children}</p>
)

const Home = () => {
	const { setTheme } = useTheme()

	return (
		<section className="wfull mnh-screen py-40">
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
								<Button bg="slate">Slate Button</Button>
								<Button bg="zinc">Zinc Button</Button>
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
					<div className="mw-100">
						<Text>
							The <code>Dropdown</code> component, as you see
							below, is a very primitive wrapper around the{" "}
							<code>Menu</code> component. For most uses, you'll
							want to create a custom wrapper around it yourself
							using the <code>useDynamicPanel</code> hook. See
							that file for more information.
						</Text>
					</div>

					<Row>
						<Block>
							<Caption>Default</Caption>
							<Dropdown />
						</Block>
					</Row>
				</Section>

				<Section>
					<Title>Segmented Control</Title>
					<div className="mw-100">
						<Text>
							The hover action is a little unconventional, but I
							think it works nicely. On hover, it is a shallow
							selection: the indicator will follow your mouse, but
							when you leave without making a selection, it will
							revert to its previous state.
						</Text>
					</div>

					<Row>
						<Block>
							<Caption>Default</Caption>
							<SegmentedControl
								segments={[
									{ label: "One" },
									{ label: "Two" },
									{ label: "Three" },
								]}
								onChange={segment => console.log(segment)}
							/>
						</Block>
						<Block>
							<Caption>Default select last</Caption>
							<SegmentedControl
								segments={[
									{ label: "Four" },
									{ label: "Five" },
									{ label: "Six" },
								]}
								defaultSelected={2}
							/>
						</Block>
						<Block>
							<Caption>With icons</Caption>
							<SegmentedControl
								segments={[
									{ label: "Locate", icon: <MapPinIcon /> },
									{
										label: "Call",
										icon: <PhoneArrowDownLeftIcon />,
									},
									{ label: "Settings", icon: <CogIcon /> },
								]}
							/>
						</Block>
						<Block>
							<Caption>Icons only</Caption>
							<SegmentedControl
								mods={["icons-only"]}
								segments={[
									{
										label: "light",
										icon: <SunIcon />,
									},
									{
										label: "dark",
										icon: <MoonIcon />,
									},
									{
										label: "system",
										icon: <BoltIcon />,
									},
								]}
								onChange={segment => {
									console.log(segment)
									setTheme(segment.label)
								}}
							/>
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
