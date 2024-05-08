import { render, screen, fireEvent } from "@testing-library/react";
import {CheckoutActions} from "../CheckoutActions";

describe('checkout action flow', () => {
    render(<CheckoutActions />)

    const chkEl = screen.getByRole('checkbox', { name: /terms/i })
    const btnEl = screen.getByRole('button', { name: /checkout/i })

    fireEvent.click(chkEl)

    // expect(btnEl).toBeE
})

