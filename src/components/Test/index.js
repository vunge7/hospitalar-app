import React, { useEffect, useState } from 'react';

import { api } from '../../service/api';
import { VoiceCapture } from '../../components/util/utilitarios';

function Test() {
    return (
        <div>
            <VoiceCapture />
        </div>
    );
}
export default Test;
