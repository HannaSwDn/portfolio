describe 'Index Page', type: :feature do
    it 'displays a header' do
        visit '/'

        expect(page).to have_css '.middle'
        within '.middle' do
            expect(page).to have_content 'portfolio'
            expect(page).to have_content 'hanna linnéa nyman'
        end
    end

    it 'displays a navigation bar' do
        visit '/'

        expect(page).to have_css '#nav'
        within '#nav' do
            expect(page).to have_content 'menu'
        end
    end

    describe 'menu' do
        it 'displays navigation links' do
            visit '/'
    
            within '#menu' do
                expect(page).to have_content 'home'
            end
        end
    end
end

