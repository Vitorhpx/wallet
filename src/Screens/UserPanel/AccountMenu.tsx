import React, {Component} from 'react';
import {BankList, Bank} from './UserPanel.style';

type AccountMenuProps = {

}

const AccountMenu: React.FC<AccountMenuProps> = (props: AccountMenuProps) => {
    return(
        <>
            <label htmlFor='IntegrationList'>Integrations:</label>
            <BankList id='IntegrationList'>
                <Bank>
                    Banco1:
                    <button
                        onClick={() => alert('ainda não implementado')}
                    >
                        integrar
                    </button>
                </Bank>
                <Bank>
                    Banco2:
                    <button
                        onClick={() => alert('ainda não implementado')}
                    >
                        integrar
                    </button>
                </Bank>
                <Bank>
                    Banco3:
                    <button
                        onClick={() => alert('ainda não implementado')}
                    >
                        integrar
                    </button>
                </Bank>
            </BankList>
        </>
    )
}

export default AccountMenu;