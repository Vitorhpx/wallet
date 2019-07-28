import React, {Component} from 'react';
import {BankList, Bank, IntegrateButton} from './UserPanel.style';

type AccountMenuProps = {

}

const AccountMenu: React.FC<AccountMenuProps> = (props: AccountMenuProps) => {
    return(
        <>
            <label htmlFor='IntegrationList'><strong>Integrations:</strong></label>
            <BankList id='IntegrationList'>
                <Bank>
                    Banco1:
                    <IntegrateButton
                        onClick={() => alert('ainda não implementado')}
                    >
                        integrar
                    </IntegrateButton>
                </Bank>
                <Bank>
                    Banco2:
                    <IntegrateButton
                        onClick={() => alert('ainda não implementado')}
                    >
                        integrar
                    </IntegrateButton>
                </Bank>
                <Bank>
                    Banco3:
                    <IntegrateButton
                        onClick={() => alert('ainda não implementado')}
                    >
                        integrar
                    </IntegrateButton>
                </Bank>
            </BankList>
        </>
    )
}

export default AccountMenu;