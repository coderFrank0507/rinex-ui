import React, { useState } from 'react';
import { AlertDialog, Button } from '../../../components/src';

export default function AlertDialogDemo() {
	const [basicOpen, setBasicOpen] = useState(false);
	const [infoOpen, setInfoOpen] = useState(false);
	const [successOpen, setSuccessOpen] = useState(false);
	const [warningOpen, setWarningOpen] = useState(false);
	const [errorOpen, setErrorOpen] = useState(false);
	const [noCloseOpen, setNoCloseOpen] = useState(false);

	return (
		<div className="p-8 space-y-8">
			<h2 className="text-2xl font-bold mb-4">AlertDialog Demo</h2>

			<div className="space-y-4">
				{/* Basic AlertDialog */}
				<div className="flex items-center space-x-4">
					<Button variant="primary" onClick={() => setBasicOpen(true)}>
						Open Basic Alert Dialog
					</Button>
				</div>
				<AlertDialog open={basicOpen} onOpenChange={setBasicOpen}>
					<AlertDialog.Backdrop>
						<AlertDialog.Container>
							<AlertDialog.Dialog>
								<AlertDialog.CloseTrigger />
								<AlertDialog.Header>
									<AlertDialog.Heading>Basic Alert</AlertDialog.Heading>
								</AlertDialog.Header>
								<AlertDialog.Body>
									<p>This is a basic alert dialog with a close button.</p>
								</AlertDialog.Body>
								<AlertDialog.Footer>
									<Button variant="default" size="sm" onClick={() => setBasicOpen(false)}>Cancel</Button>
									<Button variant="primary" size="sm" onClick={() => setBasicOpen(false)}>Confirm</Button>
								</AlertDialog.Footer>
							</AlertDialog.Dialog>
						</AlertDialog.Container>
					</AlertDialog.Backdrop>
				</AlertDialog>

				{/* Info AlertDialog */}
				<div className="flex items-center space-x-4">
					<Button variant="primary" onClick={() => setInfoOpen(true)}>
						Open Info Alert Dialog
					</Button>
				</div>
				<AlertDialog open={infoOpen} onOpenChange={setInfoOpen}>
					<AlertDialog.Backdrop>
						<AlertDialog.Container>
							<AlertDialog.Dialog>
								<AlertDialog.CloseTrigger />
								<AlertDialog.Header>
									<AlertDialog.Icon type="info" />
									<AlertDialog.Heading>Information</AlertDialog.Heading>
								</AlertDialog.Header>
								<AlertDialog.Body>
									<p>This is an informational message to help you understand the current state.</p>
								</AlertDialog.Body>
								<AlertDialog.Footer>
									<Button variant="default" size="sm" onClick={() => setInfoOpen(false)}>Cancel</Button>
									<Button variant="primary" size="sm" onClick={() => setInfoOpen(false)}>Got it</Button>
								</AlertDialog.Footer>
							</AlertDialog.Dialog>
						</AlertDialog.Container>
					</AlertDialog.Backdrop>
				</AlertDialog>

				{/* Success AlertDialog */}
				<div className="flex items-center space-x-4">
					<Button variant="primary" onClick={() => setSuccessOpen(true)}>
						Open Success Alert Dialog
					</Button>
				</div>
				<AlertDialog open={successOpen} onOpenChange={setSuccessOpen}>
					<AlertDialog.Backdrop>
						<AlertDialog.Container>
							<AlertDialog.Dialog>
								<AlertDialog.CloseTrigger />
								<AlertDialog.Header>
									<AlertDialog.Icon type="success" />
									<AlertDialog.Heading>Success!</AlertDialog.Heading>
								</AlertDialog.Header>
								<AlertDialog.Body>
									<p>Your action has been completed successfully.</p>
								</AlertDialog.Body>
								<AlertDialog.Footer>
									<Button variant="primary" size="sm" onClick={() => setSuccessOpen(false)}>Continue</Button>
								</AlertDialog.Footer>
							</AlertDialog.Dialog>
						</AlertDialog.Container>
					</AlertDialog.Backdrop>
				</AlertDialog>

				{/* Warning AlertDialog */}
				<div className="flex items-center space-x-4">
					<Button variant="primary" onClick={() => setWarningOpen(true)}>
						Open Warning Alert Dialog
					</Button>
				</div>
				<AlertDialog open={warningOpen} onOpenChange={setWarningOpen}>
					<AlertDialog.Backdrop>
						<AlertDialog.Container>
							<AlertDialog.Dialog>
								<AlertDialog.CloseTrigger />
								<AlertDialog.Header>
									<AlertDialog.Icon type="warning" />
									<AlertDialog.Heading>Warning</AlertDialog.Heading>
								</AlertDialog.Header>
								<AlertDialog.Body>
									<p>Are you sure you want to delete this item? This action cannot be undone.</p>
								</AlertDialog.Body>
								<AlertDialog.Footer>
									<Button variant="default" size="sm" onClick={() => setWarningOpen(false)}>Cancel</Button>
									<Button variant="primary" danger size="sm" onClick={() => setWarningOpen(false)}>Delete</Button>
								</AlertDialog.Footer>
							</AlertDialog.Dialog>
						</AlertDialog.Container>
					</AlertDialog.Backdrop>
				</AlertDialog>

				{/* Error AlertDialog */}
				<div className="flex items-center space-x-4">
					<Button variant="primary" onClick={() => setErrorOpen(true)}>
						Open Error Alert Dialog
					</Button>
				</div>
				<AlertDialog open={errorOpen} onOpenChange={setErrorOpen}>
					<AlertDialog.Backdrop>
						<AlertDialog.Container>
							<AlertDialog.Dialog>
								<AlertDialog.CloseTrigger />
								<AlertDialog.Header>
									<AlertDialog.Icon type="error" />
									<AlertDialog.Heading>Error</AlertDialog.Heading>
								</AlertDialog.Header>
								<AlertDialog.Body>
									<p>Something went wrong. Please try again later.</p>
								</AlertDialog.Body>
								<AlertDialog.Footer>
									<Button variant="default" size="sm" onClick={() => setErrorOpen(false)}>Cancel</Button>
									<Button variant="primary" size="sm" onClick={() => setErrorOpen(false)}>Retry</Button>
								</AlertDialog.Footer>
							</AlertDialog.Dialog>
						</AlertDialog.Container>
					</AlertDialog.Backdrop>
				</AlertDialog>

				{/* AlertDialog without close button */}
				<div className="flex items-center space-x-4">
					<Button variant="primary" onClick={() => setNoCloseOpen(true)}>
						Open Alert Dialog (No Close Button)
					</Button>
				</div>
				<AlertDialog open={noCloseOpen} onOpenChange={setNoCloseOpen}>
					<AlertDialog.Backdrop>
						<AlertDialog.Container>
							<AlertDialog.Dialog>
								<AlertDialog.Header>
									<AlertDialog.Heading>Required Action</AlertDialog.Heading>
								</AlertDialog.Header>
								<AlertDialog.Body>
									<p>You must complete this action to continue.</p>
								</AlertDialog.Body>
								<AlertDialog.Footer>
									<Button variant="primary" size="sm" onClick={() => setNoCloseOpen(false)}>Continue</Button>
								</AlertDialog.Footer>
							</AlertDialog.Dialog>
						</AlertDialog.Container>
					</AlertDialog.Backdrop>
				</AlertDialog>
			</div>
		</div>
	);
}