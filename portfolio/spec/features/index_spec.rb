describe 'Index Page', type: :feature do
    it 'displays project list' do
        visit '/'

        expect(page).to have_css '.projects'
        within '.projects' do
            expect(page).to have_content 'My First Website'
            expect(page).to have_content 'FizzBuzz'
        end
    end

    it 'displays a navigation bar' do
        visit '/'

        within 'nav' do
            expect(page).to have_content 'Hanna Linnéa Nyman'
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

