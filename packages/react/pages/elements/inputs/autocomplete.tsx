import {AutocompleteInput, Section} from '../../../src';

export default function AutocompleteInputPage() {
    return (
        <Section narrow>
            <AutocompleteInput
                suggestions={[
                    "Nguyễn Văn Anh",
                    "Lê Thị Kim Cương",
                    "Trần Mai Ngọc Ngà",
                    "Huỳnh Văn Anh Đức",
                    "Châu Ánh Nguyệt",
                    "Võ Nguyễn Mai Thy",
                    "Thái Văn Phong",
                    "Nguyễn Ngọc Minh Thư",
                    "Lê Mai Thanh Tâm",
                    "Trần Trung Kiên"
                ]}
            />
        </Section>
    );
}
