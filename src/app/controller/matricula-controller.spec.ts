import { afterEach, afterAll, beforeEach, describe, expect, it, vi, test } from 'vitest'
import { MatriculaController } from './matricula-controller';
import axios from 'axios';
import jest from '@jest/globals';

global.fetch = vi.fn();

jest

describe('Solicitar a matricula de um aluno', () => {
    it('deve realizar a matricula de um aluno com sucesso na disciplina'), () => {

        const requisicaoMock = {
            aluno_id: "M0001",
            disciplina_id: "D0001",
            ano: "2024",
            semestre: "2"
        };

    }
});