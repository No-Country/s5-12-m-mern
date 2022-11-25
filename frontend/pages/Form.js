import React, { useState } from 'react';
import PetForm from '../app/components/registrationForms/PetForm';

import WorkerForm from '../app/components/registrationForms/WorkerForm'

const Form = () => {
    return (
        <div>
            <PetForm/>
            <WorkerForm/>
        </div>
    )
}

export default Form;
